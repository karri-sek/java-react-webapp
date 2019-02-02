package com.okat.developer.jugtours;

import com.okat.developer.jugtours.model.Event;
import com.okat.developer.jugtours.model.Group;
import com.okat.developer.jugtours.model.GroupRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
public class Initializer implements CommandLineRunner {
    private final GroupRepository repository;

    public Initializer(GroupRepository repository){
        this.repository = repository;
    }
    @Override
    public void run(String... args) throws Exception {
        Stream.of("Sekhar","babu", "karri").forEach(name ->repository.save(new Group(name)));

        Group group = repository.findByName("Sekhar");

       Event e = Event.builder().title("fullstack reactive")
               .description(" first project")
               .date(Instant.parse("2018-12-12T18:00:00.000Z"))
               .build();
        group.setEvents(Collections.singleton(e));
        repository.save(group);
        repository.findAll().forEach(System.out::println);
    }

}
